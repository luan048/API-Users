export class UserValidator {
    async createUserValidation(req, res, next) {
        const {name, age, job} = req.body || {}
        const fields = ["name", "age", "job"]
        const errors = []

        for( const field of fields ) {
            if (!req.body[field]) {
                errors.push(`${field} está vazio`)
            }
        }

        if(errors.length) {
            return res.status(404).json({ errors })
        }

        next()
    }

    async getUserValidation(req, res, next) {
        const { id } = req.params
        const errors = []
    
        if (!id) {
            errors.push('ID vazio')
        }
    
        if (errors.length) {
            return res.status(400).json({ errors })
        }
    
        next()
    }
    

    async updateJobValidation(req, res, next) {
        const {id} = req.params
        const {newJob} = req.body
        const fields = ["newJob"]
        const errors = []

        for(const field of fields) {
            if(!req.body[field]) {
                errors.push(`${field} está vazio`)
            }
        }

        if(errors.length) {
            return res.status(404).json({errors})
        }

        next()
    }

    async delJobValidation(req, res, next) {
        const {id} = req.params
        const errors = []

        if(!id) {
            errors.push('id está vazio')
        }

        if(errors.length) {
            return res.status(404).json({errors})
        }

        next()
    }
}