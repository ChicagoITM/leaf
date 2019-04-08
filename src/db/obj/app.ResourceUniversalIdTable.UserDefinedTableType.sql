-- Copyright (c) 2019, UW Medicine Research IT, University of Washington
-- Developed by Nic Dobbins and Cliff Spital, CRIO Sean Mooney
-- This Source Code Form is subject to the terms of the Mozilla Public
-- License, v. 2.0. If a copy of the MPL was not distributed with this
-- file, You can obtain one at http://mozilla.org/MPL/2.0/.
﻿USE [LeafDB]
GO
/****** Object:  UserDefinedTableType [app].[ResourceUniversalIdTable]    Script Date: 4/8/19 2:27:20 PM ******/
CREATE TYPE [app].[ResourceUniversalIdTable] AS TABLE(
	[UniversalId] [nvarchar](200) NOT NULL
)
GO
