const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2142g/",
            name: "springboot2142g",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2142g/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业oa管理系统"
        } 
    }
}
export default base
