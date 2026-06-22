#!/usr/bin/env bun 
import { log } from "@clack/prompts";
import { Command } from "commander";
const program = new Command();
program
        .name("Khulja_Sim_Sim")
        .description("Khulja_Sim_Sim cli yt")
        .version("0.0.1");

program
    .command("wakeup")
    .description("Show the Banner and picj cli or telegram mode")
    .action(
        async()=>{
            console.log("WakrUp calling ....")
        }
    );

    await program.parseAsync(process.argv);