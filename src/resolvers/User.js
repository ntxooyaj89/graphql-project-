const User = {
    department(parent, args, { db }, info) {
        return db.departments.find((department) => {
            return department.departmentId === parent.id
        })
    }
}

export { User as default}