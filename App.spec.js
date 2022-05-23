
import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'
import UserSearch from './src/lib/components/user-search/user-search.svelte'

test("should write in input", async () => {
  const { container } = render(UserSearch);
  const input = container.querySelector('Search[placeholder="Text"]');

  await fireEvent.input(input, { target: { value: "ID874321" } });

  expect(input.value).toBe("ID874321");
  expect(container.querySelector("Item").textContent).toBe("ID874321");
});