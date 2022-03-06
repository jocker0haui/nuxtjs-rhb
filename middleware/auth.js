export default function(context){
    // console.log(context.store.getters.isAuthenticated)
    if(!context.store.getters.isAuthenticated){
        context.redirect('/')
        alert("Bạn chưa đăng nhập ! Vui long login trước")
    }
}