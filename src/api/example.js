import request from "@/util/request";
// 查询
export function query(task) {
  return request({
    url: "/api/example/lxquery",
    method: "get",
    params: { task }
  });
}