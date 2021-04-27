import Axios from "axios";

export default class CourseService {
  async fetchAll() {
    return await Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      method: "GET",
      mimeType: "json",
    });
  }
  async fetchTitleCourses() {
    return await Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc      ",
      method: "GET",
      mimeType: "json",
    });
  }

  async fetchCourses_Title(title) {
    return await Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${title}`,
      method: "GET",
      mimeType: "json",
    });
  }
}
