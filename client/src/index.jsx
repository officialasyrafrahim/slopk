import '@lynx-js/preact-devtools';
import '@lynx-js/react/debug';
import 'tailwindcss/utilities.css';
import './index.css';
import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from './pages/home/App.jsx';
import { Dashboard } from './pages/dashboard/App.jsx';
import { DashboardTrash } from './pages/dashboardTrash/App.jsx';
import { Search } from './pages/search/App.jsx';
import { Header } from './components/header.jsx';

root.render(
  <MemoryRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trash" element={<DashboardTrash />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
