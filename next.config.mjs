/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
import { withContentlayer } from "next-contentlayer";

const nextConfig = {};

// module.exports = nextConfig;

export default withPlaiceholder(withContentlayer(nextConfig));
