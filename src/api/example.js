import request from "@/util/request";
// 查询
export function query(params) {
  return request({
    url: "/api/example/lxquery",
    method: "get",
    params
  });
}