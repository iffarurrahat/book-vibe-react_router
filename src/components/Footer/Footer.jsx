import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="nunito">
      <div className="mt-10 py-20 md:py-32 bg-[#272727]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 text-white px-5 sm:px-8 md:px-0">
            <div>
              <h2 className="text-sm font-semibold mb-5">Book Vibe</h2>
              <p className="leading-6 text-[#ffffff4d]">
                Books open doors to new worlds, offering endless adventures,
                wisdom, and the joy of discovery.
              </p>
              <Link to="/" className="flex items-center  mt-3 text-[#23BE0A]">
                read more <IoIosArrowRoundForward className="w-10 h-6" />
              </Link>
            </div>
            <div className="lg:pl-16">
              <h2 className="text-sm font-semibold mb-5">CATEGORIES</h2>
              <div className="space-y-2 text-[#ffffffb3]">
                <p>Listed Books</p>
                <p>Pages to Read</p>
                <p>Blog</p>
                <p>Others</p>
                <p>Help & Support</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold mb-5">TAG CLOUD</h2>
              <div className="flex flex-wrap gap-5">
                <span className="text-xs border border-[#3D3D3D] py-1 px-2 rounded">
                  Book
                </span>
                <span className="text-xs border border-[#3D3D3D] py-1 px-2 rounded">
                  Review
                </span>
                <span className="text-xs border border-[#3D3D3D] py-1 px-2 rounded">
                  Knowlaged
                </span>
                <span className="text-xs border border-[#3D3D3D] py-1 px-2 rounded">
                  Education
                </span>
                <span className="text-xs border border-[#3D3D3D] py-1 px-2 rounded">
                  Tech
                </span>
                <span className="text-xs border border-[#3D3D3D] py-1 px-2 rounded">
                  Writer
                </span>
                <span className="text-xs border border-[#3D3D3D] py-1 px-2 rounded">
                  Fictions
                </span>
                <span className="text-xs border border-[#3D3D3D] py-1 px-2 rounded">
                  Others
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold mb-5">SUBSCRIBE</h2>
              <div className="flex mb-5">
                <input
                  type="text"
                  className="px-3 py-2 rounded-l-md bg-[#323232] outline-none"
                  placeholder="Enter email address"
                />
                <button className="bg-[#23BE0A] rounded-r-md px-3">##</button>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-semibold mb-5">FOLLOW US</h2>
                <div className="flex gap-5">
                  <p className="border p-2 rounded">
                    <FaXTwitter className="text-white" />
                  </p>
                  <p className="border p-2 rounded">
                    <FaFacebookF className="text-white" />
                  </p>
                  <p className="border p-2 rounded">
                    <FaInstagram className="text-white" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#1A1A1A] py-5">
        <Container>
          <div className="sm:flex items-center justify-between">
            <p className="text-[#ffffffb3] text-center sm:text-start">
              Copyright ©2024 All rights reserved
            </p>
            <ul className="flex gap-4 text-[#ffffffb3] justify-center sm:justify-end mt-3 sm:mt-0">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Compliances</li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
