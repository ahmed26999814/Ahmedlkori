import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			ink: '#0b0c10',
  			haze: '#0f1116',
  			glass: 'rgba(255, 255, 255, 0.08)',
  			stroke: 'rgba(255, 255, 255, 0.18)',
  			accent: {
  				'50': '#f1f8f1',
  				'100': '#dff0e1',
  				'200': '#b7dfbf',
  				'300': '#8acd9a',
  				'400': '#57b86f',
  				'500': '#1f8f39',
  				'600': '#187330',
  				'700': '#135a27',
  				'800': '#0f4520',
  				'900': '#0b3419',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			sunrise: '#9bbd41',
  			mint: '#1fa64a',
  			rose: '#0f6b2f',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'var(--font-cairo)',
  				'Cairo',
  				'IBM Plex Sans Arabic',
  				'Noto Sans Arabic',
  				'Segoe UI',
  				'Tahoma',
  				'Arial',
  				'sans-serif'
  			],
  			body: [
  				'var(--font-plex)',
  				'IBM Plex Sans Arabic',
  				'Cairo',
  				'Noto Sans Arabic',
  				'Segoe UI',
  				'Tahoma',
  				'Arial',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			glow: '0 0 40px rgba(31,157,85,0.35)',
  			glass: '0 12px 48px rgba(15, 23, 42, 0.25)',
  			soft: '0 10px 30px rgba(15, 23, 42, 0.2)'
  		},
  		backgroundImage: {
  			'hero-gradient': 'radial-gradient(1200px circle at 85% 15%, rgba(31, 143, 57, 0.28), transparent 55%), radial-gradient(900px circle at 12% 25%, rgba(155, 189, 65, 0.18), transparent 50%), linear-gradient(135deg, rgba(10, 12, 20, 0.9), rgba(6, 8, 14, 0.98))',
  			'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
  			'card-noise': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-200% 0'
  				},
  				'100%': {
  					backgroundPosition: '200% 0'
  				}
  			},
  			glow: {
  				'0%, 100%': {
  					opacity: '0.6'
  				},
  				'50%': {
  					opacity: '1'
  				}
  			},
  			gradient: {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%'
  				}
  			}
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			shimmer: 'shimmer 2.2s linear infinite',
  			glow: 'glow 4s ease-in-out infinite',
  			gradient: 'gradient 15s ease infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
