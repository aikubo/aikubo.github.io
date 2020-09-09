import React from "react"
import logStyles from "../pages/log.module.scss"

// Makes the tags into little grey blocks
// to be displayed on the ./log page
const Tags = ({ children }) =>
  children && (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
      {children.map(t => (
        <li
          key={t}
          style={{
            borderRadius: `4px`,
            border: `1px solid grey`,
            padding: `2px 8px`,
            marginRight: `2px`,
            marginBottom: `2px`,
            fontSize: `80%`,
            backgroundColor: "grey",
            color: "white",
            listStyle: "none",
          }}
        >
          {t}
        </li>
      ))}
    </ul>
  )

export default Tags