export class Logger {

    static info(message: string) {

        console.log(`[INFO] ${message}`);

    }

    static error(message: string) {

        console.log(`[ERROR] ${message}`);

    }

    static warn(message: string) {

        console.log(`[WARN] ${message}`);

    }

}