import React, { useState, useEffect, useRef } from "react";
import img from "../../src/assets/img/dataPass.png";
import Footer from "./footer";
import { fetchData } from "../test/testData";

export interface MyDataType {
  id: number;
  title: string;
  description: string;
  date: string;
  visited: number;
}

function Blog() {
  const [data, setData] = useState<MyDataType[]>(fetchData);
  const [sortType, setSortType] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const totalPosts = data.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const allNewsRef = useRef<HTMLDivElement>(null);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    allNewsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    let sortedData = [...data];
    if (sortType === "latest") {
      sortedData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortType === "popular") {
      sortedData.sort((a, b) => b.visited - a.visited);
    }

    setData(sortedData);
  }, [sortType]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" flex flex-col pt-16 bg-transparent lg:pt-24  w-full sm:w-4/5 sm:mx-auto lg:min-h-screen font-sf-pro-text">
      <div className=" flex flex-grow justify-start z-10 rounded-sm items-start mb-24 px-4 sm:px-0 lg:mb-80 lg:bg-white w-full ">
        <div className=" flex flex-col bg-white w-full">
          <div className=" text-xl lg:text-4xl  font-bold text-black mt-8 lg:mt-12 mb-4">
            Your
            <span className=" text-[#fccc00] text-3xl lg:text-5xl items-center justify-center ">
              D
            </span>
            &nbsp;News
            <div className="  border-b-2 lg:mt-2 border-[#fccc00] border-width-"></div>
          </div>
          <div className="    text-md lg:text-2xl font-bold text-black mt-3 lg:mt-12 mb-1 lg:mb-2 uppercase">
            Recent News
          </div>
          <div className=" gap-2 sm:grid sm:grid-cols-12 rounded-sm lg:gap-10 w-full sm:h-60">
            <img
              src={img}
              alt="Latest News"
              className=" rounded-sm object-contain w-full h-60  sm:col-span-5 duration-300 hover:scale-105"
            />
            <div className="w-full backdrop-blur-lg flex flex-col gap-2 items-start justify-start h-60 sm:col-span-7">
              <div className="text-sm sm:text-lg font-medium">2023. 09. 23</div>
              <div className="  w-full text-lg sm:text-xl font-bold">
                YourD: Realizing Data Sovereignty in Web3.0
              </div>
              <div className=" text-sm lg:text-lg text-gray-600 text-ellipsis overflow-hidden whitespace-normal">
                We recognize the challenges surrounding data sovereignty and
                privacy in today's web environment. YourD was born to
                fundamentally address these issues by introducing a new
                authentication protocol and infrastructure services centered
                around the core principle of Web3.0 - individual data
                sovereignty. Web3.0 Authentication Protocol: Through various
                services such as GDPR-compliant analytics, easy login, data
                selling, and targeted advertising, businesses can deliver
                efficient services without personal data leaks. Enhancing Data
                Privacy: Beyond the limitations of traditional blockchain
                technologies, YourD offers a new infrastructure that enhances
                individual data privacy and ownership. Integrated SaaS Services:
                YourD provides a comprehensive SaaS service based on the DID
                toolkit, ensuring safety and efficiency for developers and
                businesses building Web3.0 projects. Explore the new dimensions
                of blockchain technology with YourD and join us in building a
                safer and more democratic Web3.0 ecosystem.
              </div>
            </div>
          </div>

          <div
            ref={allNewsRef}
            className="  flex mt-8 mb-4 backdrop-blur-lg  justify-between items-center lg:mt-32"
          >
            <div className="   text-md mb-1 lg:text-2xl font-bold text-black uppercase">
              All News
            </div>
            <div className="  text-xs  lg:text-lg flex-row flex gap-1 lg:gap-2">
              <button
                onClick={() => setSortType("latest")}
                className="  hover:bg-yellow-300 font-normal border border-black rounded-sm px-1 lg:px-2"
              >
                Latest
              </button>
              <button
                onClick={() => setSortType("popular")}
                className="  hover:bg-yellow-300 font-normal border border-black rounded-sm px-1 lg:px-2"
              >
                Popular
              </button>
            </div>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-lg gap-8 lg:gap-6 ">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="col-span-1 lg:my-6 rounded-sm   bg-white "
              >
                <div className="transform translate-y-2  font-bold absolute text-xs lg:text-xl">
                  Your
                  <span className="text-[#fccc00] lg:text-2xl  items-center justify-center">
                    D
                  </span>
                </div>
                <img
                  src={img}
                  alt=""
                  className="object-contain duration-300 hover:scale-105"
                />
                <div className="font-regular text-sm text-gray-500 rounded-sm">
                  {post.date}
                </div>
                <div className="lg:mt-4 my-2 text-lg sm:text-xl font-bold lg:text-xl">
                  {post.title}
                </div>
                <div className="text-sm sm:text-lg text-gray-600 h-10 sm:h-16 w-full text-ellipsis overflow-hidden">{`"${post.description}"`}</div>
              </div>
            ))}
          </div>
          <div className="  flex justify-center items-center my-12 lg:my-24">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 p-1  ${
                  currentPage === index + 1 ? "text-yellow-500" : "text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
