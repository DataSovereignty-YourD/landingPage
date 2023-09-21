import React, { useState, useEffect } from "react";

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="pt-24  mx-32  min-h-screen flex flex-col">
      <div className="flex flex-grow rounded-3xl items-center mb-80 shadow-2xl bg-white justify-center z-10">
        <div className="   flex flex-col mx-24">
          <div className="  text-4xl font-bold text-black mt-12 mb-4  pt-12">
            Your
            <span className="  text-yellow-300 items-center justify-center ">
              D
            </span>{" "}
            News
            <div className="border-b-2 mt-2 border-yellow-400 border-width-"></div>
          </div>

          <div className="  text-2xl font-bold text-black mt-12 mb-2 uppercase">
            Recent News
          </div>
          <div className="  grid  grid-cols-3 gap-12">
            <div className="  flex col-span-2 rounded-xl ">
              <img
                src={img}
                alt="Latest News"
                className="   border border-black rounded-xl shadow-xl  w-[1000px]"
              />
            </div>
            <div className="  mx-4 flex flex-col gap-12 items-center   col-span-1">
              <div className="text-xl font-bold ">
                YourD: Realizing Data Sovereignty in Web3.0
              </div>
              <div className=" ">
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

          <div className="flex mt-32  justify-between items-center ">
            <div className="   text-3xl font-bold text-black uppercase">
              All News
            </div>
            <div className="   text-xl font-normal flex-row flex gap-2">
              <button
                onClick={() => setSortType("latest")}
                className="bg-[#fccc00] font-bold border border-black rounded-md px-2"
              >
                Latest
              </button>
              <button
                onClick={() => setSortType("popular")}
                className="bg-[#fccc00] font-bold border border-black rounded-md px-2"
              >
                Popular
              </button>
              <div className=" bg-[#fccc00] font-bold border border-black rounded-md px-2">
                Category ↓
              </div>
            </div>
          </div>

          <div className="gap-14 grid grid-cols-3  ">
            {currentPosts.map((post) => (
              <div key={post.id} className="col-span-1 my-12 rounded-2xl">
                <div className="transform translate-y-2 translate-x-3  font-bold absolute text-xl">
                  Your
                  <span className="text-yellow-300 text-2xl  items-center justify-center">
                    D
                  </span>
                </div>
                <img
                  src={img}
                  alt=""
                  className="border border-yellow-700 shadow-xl rounded-xl"
                />
                <div className="px-2 mt-4 font-bold text-xl">{post.title}</div>
                <div className="px-2 w-full">{`"${post.description}"`}</div>
                <div className="flex justify-between mt-2 mx-2">
                  <div className="bg-yellow-100 text-black rounded-xl px-2">{`👍 ${post.visited}`}</div>
                  <div className="font-semibold bg-yellow-100 rounded-lg px-2">
                    {post.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-24 mb-32">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 p-1  ${
                  currentPage === index + 1 ? "text-blue-500" : "text-black"
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
