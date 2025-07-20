import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components can be added here
    h1: ({ children, ...props }) => (
      <h1
        className="mb-6 text-4xl font-bold text-gray-900 dark:text-white"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mb-4 text-3xl font-semibold text-gray-800 dark:text-gray-200"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-200"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </p>
    ),
    a: ({
      children,
      href,
      ...props
    }: {
      children: React.ReactNode;
      href?: string;
      [key: string]: unknown;
    }) => (
      <a
        href={href}
        className="text-blue-600 underline transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-6 border-l-4 border-blue-500 pl-4 text-gray-600 italic dark:text-gray-400"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => (
      <code
        className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm dark:bg-gray-800"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
        {...props}
      >
        {children}
      </pre>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="mb-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="mb-4 list-inside list-decimal space-y-2 text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    ...components,
  };
}
