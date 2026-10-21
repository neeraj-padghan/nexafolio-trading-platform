import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import '@testing-library/jest-dom';

test("renders Nexafolio Home Page with Navbar, Hero and Footer", () => {
  render(
    <BrowserRouter>
      <Navbar />
      <HomePage />
      <Footer />
    </BrowserRouter>
  );

  // Check Hero headline
  const heroHeading = screen.getByText(/Master Your Wealth With Precision/i);
  expect(heroHeading).toBeInTheDocument();

  // Check platform badge
  const badgeText = screen.getByText(/Nexafolio Platform 2.0/i);
  expect(badgeText).toBeInTheDocument();
});
