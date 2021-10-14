import { Octokit } from "@octokit/core";
import { VERSION } from "./version";

type Options = Record<string, unknown>;

/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */
export function getPastAndPresentIssueAssigneesLogins(
  octokit: Octokit,
  options: Options
) {}
getPastAndPresentIssueAssigneesLogins.VERSION = VERSION;
