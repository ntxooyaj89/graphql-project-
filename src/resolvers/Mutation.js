import uuidv4 from 'uuid/v4'

const Mutation = {
    createUser(parent, args, { db }, info) {
        const lastNameTaken = db.users.some((user) => {
            return user.lastName === args.lastName
        })

        if (lastNameTaken) {
            throw new Error('This last name taken')
        }

        const user = {
            id: uuidv4(),
            firstName: args.firstName,
            lastName: args.lastName,
            jobTitle: args.jobTitle,
            
        }

        db.users.push(user)

        return user




    },

    updateUser(parent, args, { db }, info) {
        const { id, data } = args
        const user = db.users.find(() => user.id === id)

        if (!user) {
            throw new Error('User not found')
        }

        if (typeof data.firstName === 'string') {
            user.firstName === data.firstName
        }

        if (typeof data.lastName === 'string') {
            user.lastName === data.lastName

        }

        if (typeof data.jobTitle === 'string') {
            user.jobTitle === data.jobTitle
        }

        if (typeof data.departmentId === 'string') {
            user.departmentId === data.departmentId
        }

        if (typeof data.managerId === 'string') {
            user.managerId === data.managerId
        }

        return user



    }
}

export { Mutation as default }