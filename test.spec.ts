
class UserService {

    constructor(private userRepository: UserRepository) { }

    async create(name: string, cpf: string): Promise<void> {
        const result = await this.userRepository.create(name, cpf)
        return result
    }

    async getAll():Promise<void>{
        const result = await this.userRepository.getAll()
        return result
    }

    async getById(id):Promise<void>{
        const result = await this.userRepository.getById(id)
        return result
    }
}
/*----------------------------------------------------------------------------*/

interface IUserRepository {
    create: (name: string, cpf: string) => Promise<void>
    getAll:()=>Promise<void>
    getById:(id:string)=>Promise<any>
}

/*----------------------------------------------------------------------------*/

class UserRepository implements IUserRepository {
    
    async create(name: string, cpf: string): Promise<any> {
        const result = {
            name: name,
            cpf: cpf
        }
        return result
    }

    async getAll():Promise<any>{
        const result = {
            name:'Rafael',
            cpf:'12055764608'
        }
        return result
    }

    async getById(id: string):Promise<any>{
        const result = {
            id:'idTeste',
            name:'Rafael',
            cpf:'12055764608'
        }
        return result
    }
}

/*----------------------------------------------------------------------------*/

describe('User test', () => {
    it('test router create', async () => {

        const userRepository = new UserRepository()
        const userService = new UserService(userRepository)

        const result = await userService.create('Rafael', '12055764608')

        console.log(result)

        expect(result).toEqual({ name: 'Rafael', cpf: '12055764608' })
    })

    it('test router getAll',async()=>{

        const userRepository = new UserRepository()
        const userService = new UserService(userRepository)

        const result = await userService.getAll()

        expect(result).toEqual({name:'Rafael',cpf:'12055764608'})

    })

    it('test router getById',async()=>{

        const userRepository = new UserRepository()
        const userService = new UserService(userRepository)

        const id = 'idTeste'
        const result = await userService.getById(id)

        expect(result).toHaveProperty("id")

    })
})