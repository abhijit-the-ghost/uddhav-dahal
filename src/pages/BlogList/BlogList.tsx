import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Datatable/DataTable";
import styles from "./BlogList.module.scss";
import SearchFilterBar from "../../components/SearchFilterbar/SearchFilterBar";

type Blog = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  status: "Draft" | "Published";
};


const mockBlogs: Blog[] = [
  {
    id: "1",
    title: "How to Master React",
    createdAt: "2024-05-01",
    updatedAt: "2024-05-05",
    category: "Web Dev",
    status: "Published",
  },
  {
    id: "2",
    title: "10 Anime That Changed the Game",
    createdAt: "2024-04-15",
    updatedAt: "2024-04-16",
    category: "Anime",
    status: "Draft",
  },
];

const BlogList = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const columns = useMemo<ColumnDef<Blog>[]>(
    () => [
      {
        header: "SN",
        accessorFn: (_row, index) => index + 1,
        cell: (info) => <span>{info.getValue<number>()}</span>,
      },
      {
        header: "Title",
        accessorKey: "title",
      },
      {
        header: "Created At",
        accessorKey: "createdAt",
      },
      {
        header: "Updated At",
        accessorKey: "updatedAt",
      },
      {
        header: "Category",
        accessorKey: "category",
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ getValue }) => {
          const status = getValue<Blog["status"]>();
          return (
            <span
              style={{
                color: status === "Published" ? "#8491fb" : "#ffb347",
                fontWeight: 600
              }}
            >
              {status}
            </span>
          );
        },
      },
      {
        header: "Action",
        cell: ({ row }) => {
          const blog = row.original;
          return (
            <div className={styles.actionButtons}>
              <button
                className={styles.buttonEdit}
                onClick={() => console.log("Edit blog:", blog.id)}
              >
                Edit
              </button>
              <button
                className={styles.buttonDelete}
                onClick={() => console.log("Delete blog:", blog.id)}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const filteredBlogs = useMemo(() => {
    return mockBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter ? blog.category === categoryFilter : true;
      const matchesStatus = statusFilter ? blog.status === statusFilter : true;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, categoryFilter, statusFilter]);

  return (
    <section>
      <h1 className={styles.heading}>Blogs</h1>

      <SearchFilterBar
        onSearch={setSearch}
        filters={[
          {
            label: "Category",
            options: Array.from(new Set(mockBlogs.map((b) => b.category))),
            value: categoryFilter,
            onChange: setCategoryFilter,
          },
          {
            label: "Status",
            options: ["Draft", "Published"],
            value: statusFilter,
            onChange: setStatusFilter,
          },
        ]}
      />

      <DataTable data={filteredBlogs} columns={columns} maxWidth="100%" />
    </section>
  );
};

export default BlogList;
