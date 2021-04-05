import { setTextFilter, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'
test('settextfilter', () => {
    const action = setTextFilter('abc')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'abc'
    })
    
})
test('setStartdate', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)
    })
})