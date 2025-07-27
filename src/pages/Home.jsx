import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ClientResults from '../components/ClientResults';
import NewsletterSignup from '../components/NewsletterSignup';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ServiceCards />
      <ClientResults />
      <TestimonialCarousel />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
