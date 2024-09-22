import styles from "../Components.module.css";
import TypeScript from "../../../public/images/technologies/typescript.svg";
import JavaScript from "../../../public/images/technologies/javascript.svg";
import React from "../../../public/images/technologies/react.svg";
import NodeJS from "../../../public/images/technologies/nodedotjs.svg";
import Recoil from "../../../public/images/technologies/recoil.svg";
import GraphQL from "../../../public/images/technologies/graphql.svg";
import HTML from "../../../public/images/technologies/html5.svg";
import CSS from "../../../public/images/technologies/css3.svg";
import Python from "../../../public/images/technologies/python.svg";
import PostgreSQL from "../../../public/images/technologies/postgresql.svg";
import MySQL from "../../../public/images/technologies/mysql.svg";
import AWS from "../../../public/images/technologies/amazonwebservices.svg";
import DynamoDB from "../../../public/images/technologies/amazondynamodb.svg";
import Lambda from "../../../public/images/technologies/awslambda.svg";

export function Technologies() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>Skills</div>
      <div className={styles.technologies}>
        <TypeScript width={70} height={70} style={{ fill: "#3178C6" }} />
        <JavaScript width={70} height={70} style={{ fill: "#F7DF1E" }} />
        <HTML width={70} height={70} style={{ fill: "#E34F26" }} />
        <CSS width={70} height={70} style={{ fill: "#1572B6" }} />
        <React width={70} height={70} style={{ fill: "#61DAFB" }} />
        <NodeJS width={70} height={70} style={{ fill: "#5FA04E" }} />
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
