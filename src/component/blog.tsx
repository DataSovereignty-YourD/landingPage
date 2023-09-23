import React, { useState, useEffect, useRef } from "react";

import img from "../../src/assets/img/dataPass.png";
import Footer from "./footer";

interface MyDataType {
  id: number;
  title: string;
  description: string;
  date: string;
  visited: number;
}

function Blog() {
  const [data, setData] = useState<MyDataType[]>([]);
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
    // 페이지 번호를 클릭할 때 "All News" 섹션으로 스크롤 이동
    allNewsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    let sortedData = [...fetchData];
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
    <div className=" flex flex-col pt-16 bg-transparent lg:pt-24 lg:mx-32 lg:min-h-screen ">
      <div className=" flex flex-grow justify-start z-10 rounded-3xl items-start mb-24 lg:mb-80 lg:shadow-2xl lg:bg-white ">
        <div className=" flex flex-col mx-8 lg:mx-24">
          <div className=" text-xl lg:text-4xl font-bold text-black mt-3 lg:mt-12 mb-4pt-12">
            Your
            <span className=" text-yellow-300 text-3xl lg:text-5xl items-center justify-center ">
              D
            </span>
            &nbsp;News
            <div className="  border-b-2 lg:mt-2 border-yellow-400 border-width-"></div>
          </div>

          <div className="    text-md lg:text-2xl font-bold text-black mt-3 lg:mt-12 mb-1 lg:mb-2 uppercase">
            Recent News
          </div>
          <div className=" gap-2 grid grid-rows-12 lg:grid-cols-12 bg-white p-2 rounded-md lg:gap-10">
            <div className=" items-center justify-start flex row-span-2 lg:col-span-5 rounded-xl">
              <img
                src={img}
                alt="Latest News"
                className="  border  rounded-xl shadow-xl "
              />
            </div>
            <div className="   backdrop-blur-lg flex flex-col gap-2 items-start justify-start row-span-10 h-32 lg:h-full lg:col-span-7">
              <div className="  w-full text-md font-bold">
                YourD: Realizing Data Sovereignty in Web3.0
              </div>
              <div className=" text-xs lg:text-md overflow-hidden">
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
            className="  flex mt-8 mb-4 backdrop-blur-lg  justify-between items-center lg:mt-32 lg:mx-4"
          >
            <div className="   text-md mb-1 lg:text-2xl font-bold text-black uppercase">
              All News
            </div>
            <div className="  text-xs  lg:text-lg flex-row flex gap-1 lg:gap-2">
              <button
                onClick={() => setSortType("latest")}
                className="  hover:bg-yellow-300 font-normal border border-black rounded-md px-1 lg:px-2"
              >
                Latest
              </button>
              <button
                onClick={() => setSortType("popular")}
                className="  hover:bg-yellow-300 font-normal border border-black rounded-md px-1 lg:px-2"
              >
                Popular
              </button>
            </div>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-lg gap-8 lg:gap-6 lg:mx-2 ">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="  col-span-1 lg:my-6 rounded-2xl   bg-white shadow-md"
              >
                <div className="  transform translate-y-2 translate-x-3  font-bold absolute text-xs lg:text-xl">
                  Your
                  <span className="  text-yellow-300 lg:text-2xl  items-center justify-center">
                    D
                  </span>
                </div>
                <img src={img} alt="" className="  shadow-sm lg:shadow-xl  " />
                <div className="  flex justify-between  lg:mt-2  lg:mx-2">
                  <div className="  font-regular text-[1px] text-gray-500 rounded-lg px-2">
                    {post.date}
                  </div>
                </div>
                <div className="  lg:px-2 lg:mt-4 mt-2 text-xs font-bold px-1 lg:text-xl">
                  {post.title}
                </div>
                <div className="  text-[5px] lg:px-2 overflow-hidden  h-8 px-1 w-full">{`"${post.description}"`}</div>
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

const fetchData: MyDataType[] = [
  // Mocked data
  {
    id: 1,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 20. 2023",
    visited: 35,
  },
  {
    id: 2,
    title: "Type in style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 19. 2023",
    visited: 55,
  },
  {
    id: 3,
    title: "Looks like a win",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 18. 2023",
    visited: 77,
  },
  {
    id: 4,
    title: "Back feels great",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 17. 2023",
    visited: 80,
  },
  {
    id: 5,
    title: "It's lit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 16. 2023",
    visited: 100,
  },
  {
    id: 6,
    title: "Stand up straight",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 15. 2023",
    visited: 120,
  },
  {
    id: 7,
    title: "Sounds good",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 14. 2023",
    visited: 500,
  },
  {
    id: 8,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 13. 2023",
    visited: 120,
  },
  {
    id: 9,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 12. 2023",
    visited: 160,
  },
  {
    id: 10,
    title: "Sounds good",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 14. 2023",
    visited: 500,
  },
  {
    id: 11,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 13. 2023",
    visited: 120,
  },
  {
    id: 12,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 12. 2023",
    visited: 410,
  },
  {
    id: 13,
    title: "Sounds good",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 14. 2023",
    visited: 104,
  },
  {
    id: 14,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 13. 2023",
    visited: 407,
  },
  {
    id: 15,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 12. 2023",
    visited: 886,
  },
  {
    id: 16,
    title: "Sounds good",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 14. 2023",
    visited: 950,
  },
  {
    id: 17,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 13. 2023",
    visited: 1500,
  },
  {
    id: 18,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 12. 2023",
    visited: 1000,
  },
  {
    id: 19,
    title: "Sounds good",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 14. 2023",
    visited: 800,
  },
  {
    id: 20,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 13. 2023",
    visited: 250,
  },
  {
    id: 21,
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisici elit. Sequi, dolor.",
    date: "sep. 12. 2023",
    visited: 320,
  },
];
