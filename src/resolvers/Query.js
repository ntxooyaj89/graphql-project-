const Query = {
    users(parent, args, { db }, info) {
        return db.users
    },

    departments(parent, args, { db }, info) {
        return db.departments
    }
}

export { Query as default }