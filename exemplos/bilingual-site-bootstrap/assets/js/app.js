
// Simple i18n using data-i18n keys
const dict = {
  pt: {
    nav_title: "Mini Site: Python & C++",
    hero_badge: "Aula prática",
    hero_title: "Aprenda o básico de Python e C++",
    hero_sub: "Um guia rápido para escrever seu primeiro programa nas duas linguagens.",
    py_title: "Python — Olá, Mundo!",
    py_desc: "Python é ótimo para começar: sintaxe simples e execução interativa.",
    py_code: "print(\"Olá, Mundo!\")\n# Execute no terminal: python main.py",
    cpp_title: "C++ — Olá, Mundo!",
    cpp_desc: "C++ é compilado e muito usado para alto desempenho.",
    cpp_code: "#include <iostream>\nint main(){\n    std::cout << \"Olá, Mundo!\\n\";\n    return 0;\n}\n// Compile: g++ main.cpp -o app\n// Rode: ./app",
    steps_title: "Passo a passo",
    steps_1: "Instale Python ou um compilador C++ (g++/clang++).",
    steps_2: "Crie um arquivo main.py ou main.cpp.",
    steps_3: "Copie o código de exemplo e salve.",
    steps_4: "Execute: python main.py ou compile e rode o C++.",
    tips_title: "Boas práticas",
    tip1_t: "Use comentários",
    tip1_d: "Explique o porquê do código, não apenas o que ele faz.",
    tip2_t: "Nomeie bem",
    tip2_d: "Escolha nomes de variáveis claros e consistentes.",
    tip3_t: "Teste cedo",
    tip3_d: "Rode versões pequenas do programa e valide a saída.",
    more_title: "Mais exemplos",
    ex1_t: "Entrada do usuário",
    ex1_py: "nome = input(\"Seu nome: \")\nprint(f\"Olá, {nome}!\")",
    ex1_cpp: "#include <iostream>\n#include <string>\nint main(){\n    std::string nome; \n    std::cout << \"Seu nome: \";\n    std::getline(std::cin, nome);\n    std::cout << \"Olá, \" << nome << \"!\\n\";\n}",
    ex2_t: "Condição simples",
    ex2_py: "x = int(input(\"Número: \"))\nif x % 2 == 0:\n    print(\"Par\")\nelse:\n    print(\"Ímpar\")",
    ex2_cpp: "#include <iostream>\nint main(){\n    int x; std::cout << \"Número: \"; std::cin >> x;\n    if (x % 2 == 0) std::cout << \"Par\\n\";\n    else std::cout << \"Ímpar\\n\";\n}",
    footer: "Estrutura profissional (Bootstrap + CSS/JS próprios)."
  },
  en: {
    nav_title: "Mini Site: Python & C++",
    hero_badge: "Hands‑on lesson",
    hero_title: "Learn the basics of Python and C++",
    hero_sub: "A quick guide to write your first program in both languages.",
    py_title: "Python — Hello, World!",
    py_desc: "Python is great to start with: simple syntax and interactive execution.",
    py_code: "print(\"Hello, World!\")\n# Run in the terminal: python main.py",
    cpp_title: "C++ — Hello, World!",
    cpp_desc: "C++ is compiled and widely used for high performance.",
    cpp_code: "#include <iostream>\nint main(){\n    std::cout << \"Hello, World!\\n\";\n    return 0;\n}\n// Compile: g++ main.cpp -o app\n// Run: ./app",
    steps_title: "Step by step",
    steps_1: "Install Python or a C++ compiler (g++/clang++).",
    steps_2: "Create a file named main.py or main.cpp.",
    steps_3: "Copy the sample code and save it.",
    steps_4: "Run: python main.py or compile and run the C++.",
    tips_title: "Best practices",
    tip1_t: "Use comments",
    tip1_d: "Explain why the code exists, not only what it does.",
    tip2_t: "Name well",
    tip2_d: "Choose clear and consistent variable names.",
    tip3_t: "Test early",
    tip3_d: "Run small slices of the program and validate the output.",
    more_title: "More examples",
    ex1_t: "User input",
    ex1_py: "name = input(\"Your name: \")\nprint(f\"Hello, {name}!\")",
    ex1_cpp: "#include <iostream>\n#include <string>\nint main(){\n    std::string name; \n    std::cout << \"Your name: \";\n    std::getline(std::cin, name);\n    std::cout << \"Hello, \" << name << \"!\\n\";\n}",
    ex2_t: "Simple condition",
    ex2_py: "x = int(input(\"Number: \"))\nif x % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
    ex2_cpp: "#include <iostream>\nint main(){\n    int x; std::cout << \"Number: \"; std::cin >> x;\n    if (x % 2 == 0) std::cout << \"Even\\n\";\n    else std::cout << \"Odd\\n\";\n}",
    footer: "Professional structure (Bootstrap + custom CSS/JS)."
  }
};

function applyLang(lang){
  const t = dict[lang] || dict.pt;
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    if (el.tagName === "TEXTAREA" || el.tagName === "INPUT" || el.tagName === "CODE" || el.tagName === "PRE"){
      el.textContent = t[key] || el.textContent;
    } else {
      el.textContent = t[key] || el.textContent;
    }
  });
  // Code blocks
  document.getElementById("py-code").textContent = t.py_code;
  document.getElementById("cpp-code").textContent = t.cpp_code;
  document.getElementById("ex1-py").textContent = t.ex1_py;
  document.getElementById("ex1-cpp").textContent = t.ex1_cpp;
  document.getElementById("ex2-py").textContent = t.ex2_py;
  document.getElementById("ex2-cpp").textContent = t.ex2_cpp;
  // Buttons active state
  document.getElementById("btn-pt").classList.toggle("active", lang === "pt");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  localStorage.setItem("lang", lang);
  document.title = t.nav_title + " — Bootstrap";
}

document.getElementById("btn-pt").addEventListener("click", () => applyLang("pt"));
document.getElementById("btn-en").addEventListener("click", () => applyLang("en"));

applyLang(localStorage.getItem("lang") === "en" ? "en" : "pt");
