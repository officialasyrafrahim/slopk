import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from './pages/home/App.jsx'
import { Dashboard } from './pages/dashboard/App.jsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
