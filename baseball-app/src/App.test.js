import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


afterEach(rtl.cleanup);

test('renders without crashing', () => {
  const wrapper = rtl.render(<App />)
  const appText = wrapper.queryByText(/baseball app/i);
  expect(appText).toBeInTheDocument();
});

test('renders without crashing', () => {
  const display = rtl.render(<Display value="value" />)
  const displayText = display.queryByText(/balls:/i)
  expect(displayText).toBeInTheDocument();
})

test('renders without crashing', () => {
  const dashboard = rtl.render(<Dashboard setValue="setValue" value="value" />)
  const dashboardText = dashboard.queryByText(/strike/i)
  expect(dashboardText).toBeInTheDocument();
})