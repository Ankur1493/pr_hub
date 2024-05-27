"use server"

import { auth } from "@/auth";
import { db } from "@/lib/db";
import axios from "axios";

export const getUsername = async () => {
  try {
    const userSession = await auth();
    const user = userSession?.user;

    if (!user || !user.id) {
      return { error: "Try after logging in." };
    }

    const githubAccount = await db.account.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (!githubAccount) {
      return { error: "GitHub token not found." };
    }
    const githubToken = githubAccount.access_token;

    const userRepos = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${githubToken}`,
      }
    })
    if (!userRepos) {
      return { error: "error finding repos" }
    }
    return { userRepos: userRepos.data }

  } catch (error) {
    console.error("Error fetching GitHub token:", error);
    return { error: "An error occurred while fetching GitHub token." };
  }
};

