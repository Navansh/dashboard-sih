import { useState } from "react";

export default function ReportsSidebar({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title ">
          <span>
            {/* { item.icon && <i className={item.icon}></i> } */}
            {item.title}
          </span>
          <div className="b1"></div>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <ReportsSidebar key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a
        href={item.path || "#"}
        className="sidebar-item plain"
        //onclick of this, the table corresponding to the item.Name  should appear
        onClick={() => {
          // Hide all tables
          const tables = document.getElementsByClassName("table-class");
          for (let i = 0; i < tables.length; i++) {
            tables[i].style.display = "none";
          }

          // Show the selected table
          const table = document.getElementById(item.Name);
          if (table) {
            table.style.display = "block";
          }
        }}
      >
        {/* { item.icon && <i className={item.icon}></i> } */}
        {item.Name}
      </a>
    );
  }
}
