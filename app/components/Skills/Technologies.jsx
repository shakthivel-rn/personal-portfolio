import styles from "../Components.module.css";

import TypeScript from "@/public/images/icons/technologies/typescript.svg";
import JavaScript from "@/public/images/icons/technologies/javascript.svg";
import React from "@/public/images/icons/technologies/react.svg";
import NodeJS from "@/public/images/icons/technologies/nodedotjs.svg";
import Recoil from "@/public/images/icons/technologies/recoil.svg";
import GraphQL from "@/public/images/icons/technologies/graphql.svg";
import HTML from "@/public/images/icons/technologies/html5.svg";
import CSS from "@/public/images/icons/technologies/css3.svg";
import Python from "@/public/images/icons/technologies/python.svg";
import PostgreSQL from "@/public/images/icons/technologies/postgre.svg";
import MySQL from "@/public/images/icons/technologies/mysql.svg";
import AWS from "@/public/images/icons/technologies/amazonwebservices.svg";
import DynamoDB from "@/public/images/icons/technologies/amazondynamodb.svg";
import Lambda from "@/public/images/icons/technologies/awslambda.svg";

export function Technologies() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>Skills</div>
      <div className={styles.technologies}>
        <TypeScript width={70} height={70} style={{ fill: "#3178C6" }} />
        <JavaScript width={70} height={70} style={{ fill: "#F7DF1E" }} />
        <React width={70} height={70} style={{ fill: "#61DAFB" }} />
        <NodeJS width={70} height={70} style={{ fill: "#5FA04E" }} />
        <HTML width={70} height={70} style={{ fill: "#E34F26" }} />
        <CSS width={70} height={70} style={{ fill: "#1572B6" }} />
        <Recoil width={70} height={70} style={{ fill: "#3578E5" }} />
        <GraphQL width={70} height={70} style={{ fill: "#E10098" }} />
        <Python width={70} height={70} style={{ fill: "#3776AB" }} />
        <PostgreSQL width={70} height={70} style={{ fill: "#4169E1" }} />
        <MySQL width={70} height={70} style={{ fill: "#4479A1" }} />
        <AWS width={70} height={70} style={{ fill: "#FF9900" }} />
        <DynamoDB width={70} height={70} style={{ fill: "#4053D6" }} />
        <Lambda width={70} height={70} style={{ fill: "#FF9900" }} />
      </div>
    </div>
  );
}
