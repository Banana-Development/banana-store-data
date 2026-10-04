/* Banana Development theme data — edit it in the store admin page, then upload this file to the theme assets. */
(window.pmData = window.pmData || {})[document.currentScript ? document.currentScript.src : ""] = {
  "title": "Documentation",
  "intro": "Complete installation guides, config breakdowns, export references, and setup help for Banana Development releases.",
  "sections": [
    {
      "id": "getting-started",
      "title": "Getting started",
      "docs": [
        {
          "id": "requirements",
          "title": "Prerequisites & Requirements",
          "content": "## Server Prerequisites\n\nBefore installing any Banana Development scripts or MLOs, ensure your FiveM server meets the following requirements:\n\n- **Server Artifacts:** Recommended version `7290` or higher (mandatory for current FiveM escrow encryption).\n- **Database Engine:** `oxmysql` (v2.0.0+) running MariaDB 10.6+ or MySQL 8.0+.\n- **Framework Support:**\n  - ESX Legacy (`1.8.5` - `1.10.x`+)\n  - QBCore Framework (latest release branch)\n  - QBox Framework\n- **Core Dependencies:**\n  - `ox_lib` (required for UI notifications, progress circles, and server callback handling)\n  - `ox_target` or `qb-target`\n\n> **Note:** Running outdated server builds or unsupported legacy MySQL wrappers like `mysql-async` or `ghmattimysql` will cause runtime errors."
        },
        {
          "id": "escrow-management",
          "title": "Escrow & Keymaster",
          "content": "## Cfx.re Asset Escrow\n\nAll Banana Development releases are authenticated and delivered through the official **Cfx.re Keymaster Escrow System**.\n\n### Accessing Your Files\n1. Sign in to your Cfx.re account at [keymaster.fivem.net](https://keymaster.fivem.net).\n2. Head to the **Purchased Assets** tab.\n3. Locate the asset and click **Download**.\n\n### Transferring Licenses\nYou can transfer ownership of an asset to another Cfx.re account once via the Keymaster dashboard. Click the transfer icon next to the package and provide the target user's Cfx.re account name.\n\n### Common Licensing Issues\n- **License Mismatch Error:** Ensure the license key running on your server (`sv_licenseKey` in `server.cfg`) is owned by the exact same Cfx.re account where the asset was purchased.\n- **Asset Not Showing Up:** Payment processing can take 5 to 10 minutes. If it does not appear immediately, log out of Keymaster, log back in, and hard-refresh (`Ctrl + F5`)."
        }
      ]
    },
    {
      "id": "animated-vinewood-sign",
      "title": "Animated Vinewood Sign",
      "docs": [
        {
          "id": "vinewood-installation",
          "title": "Installation & Custom Texture",
          "content": "## Installation: Animated Vinewood Sign\n\nFollow these steps to customize and apply your custom server logo and text to the Animated Vinewood Sign.\n\n### Step 1: Prepare Your Image\n1. Visit [Photopea](https://www.photopea.com/) (or use Photoshop).\n2. Import the provided texture/UV template images into the editor.\n\n![Import to Photopea](https://2923777145-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FyXt8LfYlzG52aWg1O91s%2Fuploads%2Fc4zP4XHTHVvxIamirgkt%2Fimport%20to%20photopea.gif?alt=media&token=8c0b859b-ba02-4cde-b56a-2a8949cf0187)\n\n3. Place your custom image or server logo and add custom text as needed.\n\n![Import your logo](https://2923777145-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FyXt8LfYlzG52aWg1O91s%2Fuploads%2F2wyZB04amiau0BxnAvOn%2Fimport%20a%20logo.gif?alt=media&token=88360ac0-1c73-403a-8a7c-4b74d74b0bff)\n\n4. Hide the imported UV guideline layer once you have positioned your design.\n\n![Hide a layer](https://2923777145-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FyXt8LfYlzG52aWg1O91s%2Fuploads%2FyenMWunyhwag61KNgAOH%2Fhide%20a%20layer.gif?alt=media&token=a52ea56f-26f7-4e1a-9fe8-e5a428b1697e)\n\n5. Navigate to **File** (top-left) → **Export As** → **PNG** and save your image.\n\n![Exporting image](https://2923777145-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FyXt8LfYlzG52aWg1O91s%2Fuploads%2FdGjlns6QAMqGb3Od5dK6%2Fexporting%20a%20image.gif?alt=media&token=eb93c021-985f-48fa-8e7c-6ce3c1f98b4e)\n\n---\n\n### Step 2: Open in OpenIV\n1. Launch **OpenIV**.\n2. Enable **Edit Mode** in OpenIV.\n\n![Enable Edit Mode](https://2923777145-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FyXt8LfYlzG52aWg1O91s%2Fuploads%2FDDacfHnYKeV0XhbzrZDa%2Fenable%20the%20edit%20mode.gif?alt=media&token=487567f6-a3bd-41fa-a4e6-19884a76f928)\n\n3. Click **File** → **Open Folder...**\n4. Choose the **Animated Vinewood** resource folder and click **Select Folder**.\n\n![Open Folder in OpenIV](https://2923777145-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FyXt8LfYlzG52aWg1O91s%2Fuploads%2FWnA1XZIFXUkNDsXMQEwv%2Fopen%20folder.gif?alt=media&token=ead4b0f9-7d76-4c63-9875-fb941496820e)\n\n---\n\n### Step 3: Replace the Texture\n1. Navigate into `stream > ytd` and locate `banana_vinewood_texture.ytd`.\n2. Double-click the `.ytd` dictionary file to open the texture viewer.\n3. Click on the **second texture** in the texture list.\n4. In the top-right corner, click **Replace** and select the PNG image you exported from Photopea.\n5. Click **Save** to apply the changes to the dictionary.\n\n![Replace and Save Texture](https://2923777145-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FyXt8LfYlzG52aWg1O91s%2Fuploads%2FUz7CDdJ2lQxYfPzoErWj%2Ffinal.gif?alt=media&token=01731ba9-8d24-4a31-b9fe-4ebda50e86a7)\n\n---\n\n### Step 4: Add to Server\n1. Put the `banana_vinewood` folder into your server's `resources` directory.\n2. Add `ensure banana_vinewood` to your `server.cfg`.\n3. Restart your server.\n\n✅ **Installation Complete!** Your custom animated sign texture is now live."
        }
      ]
    },
    {
      "id": "pharmacy-heist",
      "title": "Pharmacy Heist",
      "docs": [
        {
          "id": "pharmacy-overview",
          "title": "Overview & Gameplay Flow",
          "content": "## Overview\n\nThe **Pharmacy Heist** brings an immersive, high-stakes illegal operation to your roleplay server. Players coordinate to infiltrate local pharmacies, bypass electronic alarms, crack cash registers, and break into high-security medical safes to steal money, prescription narcotics, and valuable chemical precursors.\n\n### Gameplay Walkthrough\n1. **Pre-planning & Requirements:** Players acquire necessary equipment (`lockpick`, `hack_laptop` or `thermite`, and `safe_drill`).\n2. **Scouting & Initiation:** The crew approaches a valid pharmacy location. If sufficient police officers are on duty and the location is not on cooldown, the heist can begin.\n3. **Alarm Bypass:** Players can attempt to disable the silent alarm panel using a keypad/memory hack minigame. Failing immediately notifies police dispatch.\n4. **Register Cracking:** Players can lockpick front cash drawers for quick dirty/clean cash rewards.\n5. **Safe Drilling:** Cracking the heavy backroom safe requires using a safe drill while managing drill heat and bit pressure.\n6. **Police Response:** Configurable automated dispatches pinpoint the robbery location for on-duty units with live blip updates."
        },
        {
          "id": "pharmacy-install",
          "title": "Installation & Items",
          "content": "## Step-by-Step Installation\n\n1. Download `bnn-pharmacyheist` from Keymaster.\n2. Extract the folder into your server's `resources/[banana]/` folder.\n3. Register items in your inventory system.\n\n### Inventory Setup (ox_inventory)\n\nAdd the following item definitions to your `ox_inventory/data/items.lua`:\n\n```lua\n['safe_drill'] = {\n    label = 'Pneumatic Drill',\n    weight = 5000,\n    stack = false,\n    close = true,\n    description = 'Heavy-duty drill used for breaching vault and safe tumblers.'\n},\n['prescription_pad'] = {\n    label = 'Prescription Pad',\n    weight = 200,\n    stack = true,\n    close = true,\n    description = 'Official medical blank forms, highly valued on the black market.'\n},\n['oxycodone'] = {\n    label = 'Oxycodone 30mg',\n    weight = 50,\n    stack = true,\n    close = true,\n    description = 'Prescription painkiller bottle.'\n},\n['liquid_ketamine'] = {\n    label = 'Ketamine Vial',\n    weight = 100,\n    stack = true,\n    close = true,\n    description = 'Pharmaceutical-grade anaesthetic solution.'\n}\n```\n\n### Server Configuration\n\nAdd the start command to your `server.cfg` strictly after framework & inventory dependencies:\n\n```cfg\nensure ox_lib\nensure ox_inventory # or qb-inventory\nensure ox_target    # or qb-target\n\nensure bnn-pharmacyheist\n```"
        },
        {
          "id": "pharmacy-config",
          "title": "Configuration Reference",
          "content": "## Config Breakdown (`config.lua`)\n\nBelow is an annotated breakdown of the primary configuration options:\n\n```lua\nConfig = {}\n\n-- Framework selection: 'auto', 'esx', 'qbcore', or 'qbox'\nConfig.Framework = 'auto'\n\n-- Police constraints\nConfig.RequiredPolice = 3          -- Minimum active cops required on-duty\nConfig.PoliceJobs = { 'police', 'sheriff', 'state' } -- Job names counted as police\n\n-- Timers & Cooldowns\nConfig.GlobalCooldown = 2700       -- Global cooldown in seconds across all pharmacies (45 mins)\nConfig.LocationCooldown = 3600     -- Individual pharmacy cooldown (60 mins)\nConfig.AlarmTriggerDelay = 10      -- Delay in seconds before dispatch alert fires\n\n-- Minigames & Mechanics\nConfig.Minigames = {\n    alarm = { type = 'memory', blocks = 5, time = 10 },\n    register = { type = 'lockpick', difficulty = 'medium' },\n    safe = { type = 'drill', overheatRate = 1.2 }\n}\n\n-- Heist Locations\nConfig.Locations = {\n    ['pillbox_pharmacy'] = {\n        label = 'Pillbox Hill Medical Supplies',\n        alarmCoords = vec3(309.2, -594.1, 43.28),\n        registers = {\n            { coords = vec3(311.5, -593.4, 43.28), heading = 68.0, looted = false }\n        },\n        safe = {\n            coords = vec3(316.8, -597.5, 43.28),\n            heading = 158.0,\n            model = `p_v_43_safe_s`\n        },\n        rewards = {\n            cash = { min = 2000, max = 4500, dirty = true },\n            items = {\n                { item = 'oxycodone', count = { min = 3, max = 8 }, chance = 85 },\n                { item = 'liquid_ketamine', count = { min = 1, max = 3 }, chance = 50 },\n                { item = 'prescription_pad', count = { min = 1, max = 2 }, chance = 40 }\n            }\n        }\n    }\n}\n```"
        },
        {
          "id": "pharmacy-exports",
          "title": "Exports & Events",
          "content": "## Developer API & Integrations\n\nIntegrate external scripts, custom dispatch systems, or quest logs using the following server and client exports.\n\n### Server Exports\n\n#### `isPharmacyOnCooldown`\nChecks if a given location is locked under cooldown.\n```lua\nlocal isCooldown = exports['bnn-pharmacyheist']:isPharmacyOnCooldown('pillbox_pharmacy')\nif isCooldown then\n    print('This pharmacy was recently hit!')\nend\n```\n\n#### `resetPharmacy`\nForces a manual reset of a pharmacy, restoring registers and locks.\n```lua\nexports['bnn-pharmacyheist']:resetPharmacy('pillbox_pharmacy')\n```\n\n### Dispatch Event (`client/open/dispatch.lua`)\n\nYou can customize the dispatch handler inside `client/open/dispatch.lua` to route alerts to your dispatch resource:\n\n```lua\nRegisterNetEvent('bnn-pharmacyheist:client:alertPolice', function(coords, streetName)\n    -- Example for ps-dispatch:\n    exports['ps-dispatch']:PharmacyRobbery({\n        coords = coords,\n        message = 'Silent alarm activated at ' .. streetName,\n        dispatchCode = '10-90B'\n    })\nend)\n```"
        }
      ]
    },
    {
      "id": "advanced-billing",
      "title": "Advanced Billing",
      "docs": [
        {
          "id": "billing-overview",
          "title": "Overview & Features",
          "content": "## Overview\n\n**Advanced Billing** replaces outdated standard invoice menus with a sleek, responsive UI dashboard. Players and businesses can issue, track, dispute, and auto-collect payments seamlessly.\n\n### Highlighted Features\n- **Modern React/NUI Interface:** Clean dark-mode dashboard displaying pending, paid, and overdue bills.\n- **Direct & Offline Citation:** Issue fines directly to nearby players using target interaction, or cite offline citizens via Citizen ID / State ID.\n- **Automated Collection & Collections Agency:** Configurable schedule to auto-debit bank accounts after `X` days, with configurable interest rates.\n- **Society Split & Sales Commission:** Percentage of invoice revenue goes directly to society bank accounts while employee commission is credited instantly to the issuer.\n- **Custom Bill Templates:** Predefined fine presets for Police (speeding, reckless driving, illegal weapon) and EMS (treatment, ambulance transport)."
        },
        {
          "id": "billing-install",
          "title": "Installation & Database",
          "content": "## Step-by-Step Installation\n\n1. Download `bnn-advancedbilling` from Keymaster.\n2. Place the resource into your server's `resources/[banana]/` folder.\n3. Import the SQL table definitions into your database.\n\n### Database Schema Setup\n\nRun this query in HeidiSQL or phpMyAdmin on your server database:\n\n```sql\nCREATE TABLE IF NOT EXISTS `bnn_billing` (\n  `id` INT(11) NOT NULL AUTO_INCREMENT,\n  `sender_identifier` VARCHAR(64) NOT NULL,\n  `sender_name` VARCHAR(128) NOT NULL,\n  `target_identifier` VARCHAR(64) NOT NULL,\n  `target_name` VARCHAR(128) NOT NULL,\n  `job` VARCHAR(50) NOT NULL,\n  `label` VARCHAR(255) NOT NULL,\n  `amount` INT(11) NOT NULL,\n  `status` ENUM('unpaid', 'paid', 'cancelled', 'overdue') DEFAULT 'unpaid',\n  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  `due_date` TIMESTAMP NULL DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  INDEX `target_idx` (`target_identifier`),\n  INDEX `job_idx` (`job`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n```\n\n4. Add `ensure bnn-advancedbilling` to your `server.cfg`.\n5. Restart your server."
        },
        {
          "id": "billing-config",
          "title": "Configuration Reference",
          "content": "## Config Breakdown (`config.lua`)\n\nKey configuration parameters available in `config.lua`:\n\n```lua\nConfig = {}\n\nConfig.Framework = 'auto'          -- 'auto', 'esx', 'qbcore', or 'qbox'\nConfig.BankingResource = 'auto'    -- 'ox_banking', 'qb-banking', 'okokBanking', etc.\n\n-- Billing Rules\nConfig.AutoPayEnabled = true       -- Enable auto-deduction after due date\nConfig.AutoPayHours = 72           -- Invoice expires & auto-pays after 72 hours\nConfig.LateFeeRate = 0.10          -- Add 10% late fee if unpaid past due date\nConfig.MaxBillAmount = 500000      -- Maximum allowable amount per invoice\n\n-- Keybinds & Commands\nConfig.OpenKeybind = 'F7'          -- Default client keybind to view received bills\nConfig.Command = 'mybills'         -- Command to open the billing UI\n\n-- Authorized Invoicing Jobs\nConfig.Jobs = {\n    ['police'] = {\n        label = 'Los Santos Police Department',\n        societyAccount = 'society_police',\n        commission = 0.10,\n        presets = {\n            { label = 'Speeding (15-30 MPH Over)', amount = 500 },\n            { label = 'Reckless Driving', amount = 1500 },\n            { label = 'Possession of Illegal Firearm', amount = 7500 }\n        }\n    },\n    ['ambulance'] = {\n        label = 'Los Santos Medical Services',\n        societyAccount = 'society_ambulance',\n        commission = 0.15,\n        presets = {\n            { label = 'Standard Hospital Treatment', amount = 600 },\n            { label = 'Emergency Trauma Surgery', amount = 2500 }\n        }\n    }\n}\n```"
        },
        {
          "id": "billing-api",
          "title": "Exports & Events",
          "content": "## Developer API & Integration\n\nProgrammatically create bills from third-party scripts (e.g. impound yards, vehicle rental companies, or custom mechanics).\n\n### Server Exports\n\n#### `createBill`\nIssues a bill to an online player.\n```lua\nlocal success, billId = exports['bnn-advancedbilling']:createBill({\n    source = targetSource,          -- Server ID of the recipient\n    senderSource = source,          -- Server ID of the person issuing (or nil for automated)\n    job = 'police',                 -- Society receiving the funds\n    label = 'Speeding Fine',        -- Invoice title\n    amount = 750,                   -- Price\n    dueDateHours = 48               -- Overdue limit\n})\n```\n\n#### `createOfflineBill`\nIssues a fine directly using a citizen identifier.\n```lua\nexports['bnn-advancedbilling']:createOfflineBill({\n    citizenId = 'ABC12345',\n    job = 'court',\n    label = 'Failure to Appear',\n    amount = 5000\n})\n```"
        }
      ]
    },
    {
      "id": "troubleshooting-faq",
      "title": "Troubleshooting & FAQ",
      "docs": [
        {
          "id": "common-issues",
          "title": "Common Issues",
          "content": "## Frequently Asked Questions\n\n### 1. `SCRIPT ERROR: @bnn-.../server.lua: attempt to call a nil value`\n- **Cause:** Your framework bridge is mismatched or your server artifact is outdated.\n- **Fix:** Update server artifacts to `7290+` and ensure `Config.Framework` matches your framework.\n\n### 2. The NUI menu does not open or stays blank\n- **Cause:** Resource folder name was modified.\n- **Fix:** Do not rename the resource folders. Keep them named as provided (`bnn-pharmacyheist` and `bnn-advancedbilling`). If changed, NUI callback URLs fail.\n\n### 3. Animated Vinewood texture is corrupted or missing\n- **Cause:** The exported PNG texture dimension wasn't power-of-two (e.g. 512x512, 1024x1024, 2048x2048) or wasn't saved in OpenIV.\n- **Fix:** Make sure the image dimensions match the original texture resolution before replacing it in `banana_vinewood_texture.ytd`."
        }
      ]
    },
    {
      "id": "support",
      "title": "Support",
      "docs": [
        {
          "id": "get-help",
          "title": "Getting help",
          "content": "Need assistance? Open a support ticket on our official Discord.\n\nBefore opening a ticket, make sure to collect:\n\n- The resource name (`Animated Vinewood Sign`, `Pharmacy Heist`, or `Advanced Billing`)\n- Your Cfx.re username & transaction ID\n- Server artifact build (`version` in server console)\n- Complete error tracebacks from both server console and client F8 console\n\n> Our support team typically responds within 24 hours."
        }
      ]
    }
  ]
};
