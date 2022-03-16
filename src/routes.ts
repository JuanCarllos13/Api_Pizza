import { Router } from 'express'
import { CreateUserController } from './controllers/user/createUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserServices } from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import {CreateCategoryController} from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import {CreateProductController} from './controllers/product/CreateProductController'


const router = Router()


// router.get('/teste', (req: Request, res: Response) => {
//     return res.json({ ok: true })
// })

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailuserServices().handle)   //"get"  Pra poder buscar informações do usuário

// ==ROTAS DE CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category',isAuthenticated, new ListCategoryController().handle) //Listando as categorias, por isso get

// --- Rota product

router.post('/product', isAuthenticated, new CreateProductController().handle) //Pra criar algo





export { router }