import {json} from '@remix-run/cloudflare';
import Footer from "../components/Footer";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";

import categoryListStyles from "~/styles/categoryList.css";

import {loader as categoryListLoader} from "../components/CategoryList";
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  return categoryListLoader();
  //return json(await(await fetch('https://api.escuelajs.co/api/v1/categories')).json())
}

export default function Index() {
  const categoryList = useLoaderData()
  return (
    <div className="flex flex-col h-screen" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <div className="flex-1">
      <CategoryList categoryList={categoryList}/>
      </div>
      <Footer/>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: categoryListStyles}]
}
