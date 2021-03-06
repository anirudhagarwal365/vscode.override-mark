import * as vscode from "vscode";

export enum DecorationType {
  override = "override",
  implement = "implement",
}

export interface MarkOptions extends vscode.DecorationOptions {
  type: DecorationType;
}

export type DocumentsMarks = Map<string, MarkOptions[]>;

export interface Provider {
  getDocumentsMarks(documents: vscode.TextDocument[]): Promise<DocumentsMarks>;
  getDecoration?(type: DecorationType): vscode.TextEditorDecorationType;
}

export interface OverrideMarkApi {
  addProvider(provider: Provider): void;
}
