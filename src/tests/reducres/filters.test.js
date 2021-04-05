import filtersReducer from '../../reducers/filters'

test('filter reducer default', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
    })
})
test('filter sort By', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        ...state,
          sortBy: 'amount'
    })
})

test('filter sort by date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state).toEqual({
        ...state,
        sortBy:'date'
    })
})