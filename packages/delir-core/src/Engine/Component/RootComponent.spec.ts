import {} from 'jest'
import { mockNewProject } from '../../../test_lib/mock'
import { Composition } from '../../Document'
import DocumentOperator from '../../DocumentOperator'
import RootComponent from './RootComponent'

describe('RootComponent', () => {
    let docOp: DocumentOperator
    let composition: Composition

    beforeEach(() => {
        const p = mockNewProject()
        composition = ({
            id: 'mocked-composition',
            layers: [],
        } as Partial<Composition>) as any
        p.compositions.push(composition)

        docOp = new DocumentOperator({} as any, p)
    })

    describe('#activate', () => {
        it('Is propagation to child CompositionComponent', async () => {
            const root = new RootComponent(docOp, composition)
            const mock = jest.fn()
            root.composition.didActivate = mock
            await root.activate()

            expect(mock.mock.calls.length).toBe(1)
        })
    })

    describe('#deactivate', () => {
        it('Is propagation to child CompositionComponent', async () => {
            const root = new RootComponent(docOp, composition)
            const mock = jest.fn()
            root.composition.didDeactivate = mock
            await root.deactivate()

            expect(mock.mock.calls.length).toBe(1)
        })
    })
})
