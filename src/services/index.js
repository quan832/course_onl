import Axios from "axios";

export default class CourseService {
  async fetchAll() {
    return await Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
      mimeType: "json",
    });
  }
}
