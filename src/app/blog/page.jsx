import React from "react";
import Maintenance from "../components/maintenance/maintenance";
import BreadCrumb from "../components/breadCrumb/breadCrumb";
import { mainNavigation } from "@/app/navigation";
const route = ["blog"];
const Blog = () => {
  return (
    <section>
      <BreadCrumb route={route} nav={mainNavigation} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Maintenance />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
