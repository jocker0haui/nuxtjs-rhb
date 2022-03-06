export default function (context) {
    // vì lần đầu request nuxt chỉ làm việc với sever nhưng ko làm việc với client => cần check đk
    if (process.client) {
        context.store.dispatch('initAuth')
    }
}