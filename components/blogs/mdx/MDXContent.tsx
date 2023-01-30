"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

interface MDXContentProps {
  source: MDXRemoteProps;
  components: any;
}

export default function MDXContent({ source, components }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}
