// Utils
import { cleanCells, randomCells } from "../../src/utils/grid"
// Constants
import { COLS, ROWS } from "../../src/constants"


describe('Unit tests for utils', () => {

    context('Generate random cells grid', () => {

        it('Verify rows length of grid', () => {
            expect(randomCells()).to.have.lengthOf(ROWS)
        })

        it('Verify first row of grid filled by 0 and 1', () => {
            expect(randomCells()[0]).to.include.members([0, 1])
        })

        it('Verify cols or cells length of the first row of grid filled', () => {
            expect(randomCells()[0]).to.have.lengthOf(COLS)
        })
    })

    context('Generate clean cells grid', () => {

        it('Verify rows length of clean grid', () => {
            expect(cleanCells()).to.have.lengthOf(ROWS)
        })

        it('Verify first row of grid filled by 0', () => {
            expect(cleanCells()[0]).to.not.include(1)
        })

        it('Verify cols or cells length of the first row of clean grid', () => {
            expect(cleanCells()[0]).to.have.lengthOf(COLS)
        })
    })
})