import getVisibleExpenses from '../../selectors/getVisible'
const expenses = [{
    id: 1,
    description: 'rent',
    note: '',
    amount: 100,
    createdAt:0
    }
    ]
test('should test expense selector', () => {
    const filters = {
        text: 'rent',
        sortBy: 'date', 
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters);
    console.log(result)
    expect(result).toEqual([expenses[0]])
})