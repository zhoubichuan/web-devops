import request from "@/util/request";
// 文件相关操作
export function folder(params) {
  let target =
  //  localStorage.productUrl
  //   ? 
    {
        url: "/common-node/api/file/folder",
        method: "post",
        params,
      }
    // : {
    //     url: "mock/login.json",
    //     method: "get",
    //   };
  return request(target);
}
export function file(params) {
  let target =
  //  localStorage.productUrl
  //   ? 
    {
        url: "/common-node/api/file/file",
        method: "post",
        params,
      }
    // : {
    //     url: "mock/login.json",
    //     method: "get",
    //   };
  return request(target);
}

export function zip(params) {
  let target =
  //  localStorage.productUrl
  //   ? 
    {
        url: "/common-node/api/file/zip",
        method: "post",
        params,
      }
    // : {
    //     url: "mock/login.json",
    //     method: "get",
    //   };
  return request(target);
}