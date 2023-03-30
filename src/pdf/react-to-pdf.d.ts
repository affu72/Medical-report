declare module "react-to-pdf" {
  import React from "react";

  interface ReactToPdfProps {
    targetRef: React.RefObject<any>;
    filename?: string;
    x?: number;
    y?: number;
    scale?: number;
    onComplete?: () => void;
    onBeforeGetContent?: () => void;
    onAfterBuild?: () => void;
    onStart?: () => void;
    onProgress?: (progress: number) => void;
    options?: any;
    children: ?any;
  }

  export default class ReactToPdf extends React.Component<ReactToPdfProps> {}
}
