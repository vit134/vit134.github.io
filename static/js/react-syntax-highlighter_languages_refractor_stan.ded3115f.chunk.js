"use strict";(self.webpackChunkadventofcode_2023=self.webpackChunkadventofcode_2023||[]).push([[7842],{4585:e=>{function t(e){!function(e){var t=/\b(?:algebra_solver|algebra_solver_newton|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect|ode_(?:adams|bdf|ckrk|rk45)(?:_tol)?|ode_adjoint_tol_ctl|reduce_sum|reduce_sum_static)\b/;e.languages.stan={comment:/\/\/.*|\/\*[\s\S]*?\*\/|#(?!include).*/,string:{pattern:/"[\x20\x21\x23-\x5B\x5D-\x7E]*"/,greedy:!0},directive:{pattern:/^([ \t]*)#include\b.*/m,lookbehind:!0,alias:"property"},"function-arg":{pattern:RegExp("("+t.source+/\s*\(\s*/.source+")"+/[a-zA-Z]\w*/.source),lookbehind:!0,alias:"function"},constraint:{pattern:/(\b(?:int|matrix|real|row_vector|vector)\s*)<[^<>]*>/,lookbehind:!0,inside:{expression:{pattern:/(=\s*)\S(?:\S|\s+(?!\s))*?(?=\s*(?:>$|,\s*\w+\s*=))/,lookbehind:!0,inside:null},property:/\b[a-z]\w*(?=\s*=)/i,operator:/=/,punctuation:/^<|>$|,/}},keyword:[{pattern:/\bdata(?=\s*\{)|\b(?:functions|generated|model|parameters|quantities|transformed)\b/,alias:"program-block"},/\b(?:array|break|cholesky_factor_corr|cholesky_factor_cov|complex|continue|corr_matrix|cov_matrix|data|else|for|if|in|increment_log_prob|int|matrix|ordered|positive_ordered|print|real|reject|return|row_vector|simplex|target|unit_vector|vector|void|while)\b/,t],function:/\b[a-z]\w*(?=\s*\()/i,number:/(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:E[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,boolean:/\b(?:false|true)\b/,operator:/<-|\.[*/]=?|\|\|?|&&|[!=<>+\-*/]=?|['^%~?:]/,punctuation:/[()\[\]{},;]/},e.languages.stan.constraint.inside.expression.inside=e.languages.stan}(e)}e.exports=t,t.displayName="stan",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_stan.ded3115f.chunk.js.map