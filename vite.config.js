import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "https://t-al-d.github.io/js-portfolio/",
});
