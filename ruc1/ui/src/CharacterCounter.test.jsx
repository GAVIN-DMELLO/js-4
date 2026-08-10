import '@testing-library/jest-dom/vitest';
import {test , expect} from 'vitest'
import {render , screen , fireEvent} from '@testing-library/react'
import CharacterCounter from './CharacterCounter';



const testCases = [
  { input: "hello", expected: 5 },
  { input: "react", expected: 5 },
  { input: "", expected: 0 }
];


test.each(testCases)(
  'when typing "$input" , it shows "$expected',

  ({input , expected})=>{
    render(<CharacterCounter/>)

    const inputEl = screen.getByRole('textbox')
    const paraEl = screen.getByTestId('counter-result')


    fireEvent.change(inputEl , {target:{value:input}})

    expect(paraEl).toHaveTextContent(String(expected))
  }
)

