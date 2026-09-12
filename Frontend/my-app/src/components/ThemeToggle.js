    "use-client";
    import { Sun, Moon, Import } from "lucide-react";
    import { useTheme } from "next-themes"
    import { Butterfly_Kids } from "next/font/google";

    export default function ThemeToggle() {

        const { theme, setTheme } = useTheme()
        return (
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )}
            </button>
        )
    }